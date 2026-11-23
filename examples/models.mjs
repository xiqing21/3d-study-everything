// Original teaching models. No renderer, DOM, network, or random input.
const finite=(x,name,min=0,max=Infinity)=>{if(!Number.isFinite(x)||x<min||x>max)throw new RangeError(name);return x};
export class ThermalModel {
 constructor(config={}){this.config={c1:2000,c2:2000,g:20,t1:80,t2:20,...config};this.reset()}
 reset(){const c=this.config;finite(c.c1,'C1',1);finite(c.c2,'C2',1);finite(c.g,'G');finite(c.t1,'T1',-273.15);finite(c.t2,'T2',-273.15);this.t1=c.t1;this.t2=c.t2;this.time=0;this.paused=false;this.e0=c.c1*c.t1+c.c2*c.t2}
 setConductance(g){this.config.g=finite(g,'G')}
 step(dt){finite(dt,'dt',0,10);if(this.paused||dt===0)return;const {c1,c2,g}=this.config,e=(c1*this.t1+c2*this.t2)/(c1+c2),d=(this.t1-this.t2)*Math.exp(-g*(1/c1+1/c2)*dt);this.t1=e+c2/(c1+c2)*d;this.t2=e-c1/(c1+c2)*d;this.time+=dt}
 snapshot(){const {c1,c2,g}=this.config;return{time:this.time,paused:this.paused,t1:this.t1,t2:this.t2,c1,c2,g,equilibrium:this.e0/(c1+c2),tau:g===0?Infinity:1/(g*(1/c1+1/c2)),rate:g*(this.t1-this.t2),energyError:c1*this.t1+c2*this.t2-this.e0,transferred:c2*(this.t2-this.config.t2)}}
}
export class QueueModel {
 constructor(config={}){this.config={lambda:1,servers:1,service:2,...config};this.reset()}
 reset(){const c=this.config;finite(c.lambda,'lambda',0,10);finite(c.servers,'servers',1,8);if(!Number.isInteger(c.servers))throw new RangeError('integer servers');finite(c.service,'service',.1,100);this.time=0;this.paused=false;this.generated=0;this.completed=0;this.totalWait=0;this.nextArrival=c.lambda?1/c.lambda:Infinity;this.waiting=[];this.servers=Array.from({length:c.servers},(_,i)=>({id:'server-'+(i+1),task:null,remaining:0}))}
 step(dt){finite(dt,'dt',0,10);if(this.paused||dt===0)return;const end=this.time+dt,eps=1e-9;
  while(this.time<end-eps){const finish=Math.min(...this.servers.map(s=>s.task?this.time+s.remaining:Infinity));const next=Math.min(end,this.nextArrival,finish),delta=Math.max(0,next-this.time);for(const s of this.servers)if(s.task)s.remaining=Math.max(0,s.remaining-delta);this.time=next;
   // At a tie: departures, arrivals, then FIFO assignment.
   for(const s of this.servers)if(s.task&&s.remaining<=eps){this.completed++;s.task=null;s.remaining=0}
   if(this.nextArrival<=this.time+eps){this.generated++;this.waiting.push({id:this.generated,born:this.nextArrival});this.nextArrival=(this.generated+1)/this.config.lambda}
   for(const s of this.servers)if(!s.task&&this.waiting.length){s.task=this.waiting.shift();this.totalWait+=this.time-s.task.born;s.remaining=this.config.service}
  }
  this.time=end;
 }
 snapshot(){return{time:this.time,paused:this.paused,generated:this.generated,completed:this.completed,waiting:this.waiting.map(t=>({...t})),servers:this.servers.map(s=>({...s,task:s.task?{...s.task}:null})),busy:this.servers.filter(s=>s.task).length,capacity:this.config.servers/this.config.service,load:this.config.lambda*this.config.service/this.config.servers,meanStartedWait:this.generated-this.waiting.length?this.totalWait/(this.generated-this.waiting.length):null,config:{...this.config}}}
}
