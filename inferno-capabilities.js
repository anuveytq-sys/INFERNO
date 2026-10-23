/* JARVIS // INFERNO PROTOCOL v2.0
 * 100+ additive capability catalog, OpenRouter reasoning bridge, and voice output.
 * No API key is stored in source. Configure one locally from Inferno Settings.
 */
(function(){
'use strict';
if(window.JARVISInfernoV2)return;
var features=[
'Omni command orchestration','Multi-step mission planning','Parallel task planning','Natural-language intent routing','Context-aware command chaining','Mission checkpoints','Mission cancellation','Mission resume','Undo/restore mode','Priority queues',
'Web navigation','Web search','Multi-source research','Research synthesis','Fact extraction','Source comparison','Structured summaries','Timeline generation','Decision matrices','What-if analysis',
'Failure-mode analysis','Root-cause analysis','Recovery planning','Browser capability audit','Network diagnostics','Microphone diagnostics','Camera diagnostics','Speech-engine diagnostics','Permission audit','Storage audit',
'JARVIS health diagnostics','Module inventory','Module availability scan','UI self-test','Performance snapshot','Page visibility check','Wake-word status','Settings bridge','Core telemetry','Session event log',
'Vision screen inspection','UI element detection bridge','OCR/text extraction bridge','Image-analysis bridge','Visual comparison bridge','Chart interpretation bridge','Error-screen interpretation','Layout inspection','Accessibility inspection','Focus management',
'Head cursor control','Blink click control','Head scroll control','Gesture calibration','Gesture confidence gating','Keyboard fallback','Voice fallback','Typed command fallback','Command suggestions','Natural-language aliases',
'Email drafting','Email subject generation','Email reply drafting','WhatsApp message drafting','Message tone rewriting','Call handoff','Calendar planning','Reminder planning','Clipboard intelligence','File-selection assistance',
'YouTube workflow bridge','GitHub workflow bridge','Deployment-status inspection','Project navigation','Code explanation','Code drafting','Debugging guidance','Architecture planning','Documentation generation','Release-note generation',
'ChatGPT launcher','Claude launcher','Grok launcher','Google launcher','Maps launcher','Gmail launcher','GitHub launcher','YouTube launcher','Media launcher','External web handoff',
'OpenRouter reasoning','Model selection','Model fallback','Prompt orchestration','Structured JSON reasoning','Answer streaming bridge','Token-budget controls','Latency telemetry','AI error recovery','AI response summarization',
'Scenario simulation','Risk flagging','Confirmation gates','Permission-aware execution','Destructive-action confirmation','Sensitive-action confirmation','Action preview','Action receipts','Execution audit trail','Capability boundaries',
'Voice result narration','Speech queue','Speech cancellation','Voice-rate control','Voice-pitch control','Voice selection','Deep-voice preference','Visual result panels','Panel auto-close','Panel persistent close','Responsive Inferno HUD','Core animation states','Lightning transition','Orange-red command theme','Return-to-JARVIS transition',
'Adaptive mission decomposition',
'Multi-agent role simulation',
'Goal-to-action compiler',
'Long-task checkpoint ledger',
'Dependency graph planner',
'Command intent repair',
'Ambiguity-aware clarification',
'Natural-language command expansion',
'Voice transcript correction',
'Wake-word diagnostics report',
'Voice session recovery',
'Speech feedback prevention',
'Voice command queue',
'Command confidence scoring',
'Multilingual phrasing assistant',
'Live task status summary',
'Cross-module capability router',
'Capability readiness matrix',
'Permission preflight planner',
'Safe action preview',
'Action rollback planner',
'Failure tree builder',
'Root-cause hypothesis ranking',
'Regression test planner',
'Release readiness audit',
'Deployment incident summary',
'Browser compatibility matrix',
'Responsive HUD audit',
'Accessibility improvement plan',
'Performance bottleneck analysis',
'Animation quality director',
'3D scene composition planner',
'Volumetric core tuning',
'Particle field controls',
'Parallax calibration',
'Lighting and bloom tuning',
'Color grade profiles',
'HUD information hierarchy',
'Command macro builder',
'Reusable workflow templates',
'Context carryover brief',
'Research question generator',
'Evidence quality grading',
'Contradiction detector',
'Assumption register',
'Decision scoring framework',
'Risk and mitigation board',
'What-if branch simulator',
'Timeline and milestone generator',
'Meeting and call brief',
'Message tone presets',
'Email reply strategy',
'Documentation command builder',
'Code review checklist',
'API contract analyzer',
'Data structure designer',
'Test case generator',
'Error message explainer',
'Log pattern summarizer',
'System resource checklist',
'Offline fallback planner',
'API cost-aware planner',
'Model selection advisor',
'Prompt quality optimizer',
'Structured output formatter',
'Answer verification checklist',
'Learning tutor mode',
'Personal knowledge organizer',
'Creative concept generator',
'Prototype specification writer',
'Project scope guard',
'Minimal-change patch planner',
'Feature acceptance criteria',
'User feedback triage',
'Command alias discovery'
];
var state={active:false,apiKey:'',model:'openai/gpt-4o-mini',voiceRate:.86,voicePitch:.72,voiceName:'',speech:true};
try{state.apiKey=localStorage.getItem('jarvisOpenRouterKey')||sessionStorage.getItem('jarvisOpenRouterKey')||localStorage.getItem('jarvis_inferno_openrouter_key')||'';state.model=localStorage.getItem('jarvisOpenRouterModel')||sessionStorage.getItem('jarvisOpenRouterModel')||localStorage.getItem('jarvis_inferno_model')||'openrouter/free';state.voiceName=localStorage.getItem('jarvis_inferno_voice')||'';}catch(_){try{state.apiKey=sessionStorage.getItem('jarvisOpenRouterKey')||'';state.model=sessionStorage.getItem('jarvisOpenRouterModel')||'openrouter/free';}catch(__){}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});}
function root(){return document.getElementById('jarvis-inferno')}
function panel(title,html){var r=root();if(!r)return;var p=r.querySelector('#ji-panel');p.innerHTML='<div class="ji-panel"><button class="ji-close">×</button><div class="ji-title">'+esc(title)+'</div>'+html+'</div>';p.firstElementChild.querySelector('.ji-close').onclick=function(){p.innerHTML=''};}
function speak(text){if(!state.speech||!('speechSynthesis' in window)||!text)return;try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(String(text).slice(0,1800));u.rate=state.voiceRate;u.pitch=state.voicePitch;var vs=speechSynthesis.getVoices();var v=state.voiceName&&vs.find(function(x){return x.name===state.voiceName});if(!v)v=vs.find(function(x){return /en.*(US|GB|IN)|Daniel|Alex|Google UK English Male|Microsoft.*David|Microsoft.*Mark/i.test(x.name)});if(v)u.voice=v;speechSynthesis.speak(u)}catch(_){} }
function answerPanel(text){panel('INFERNO RESPONSE','<div style="white-space:pre-wrap;color:#ffe2bd">'+esc(text)+'</div>');speak(text);}
function settings(){try{state.apiKey=localStorage.getItem('jarvisOpenRouterKey')||sessionStorage.getItem('jarvisOpenRouterKey')||localStorage.getItem('jarvis_inferno_openrouter_key')||state.apiKey||'';state.model=localStorage.getItem('jarvisOpenRouterModel')||sessionStorage.getItem('jarvisOpenRouterModel')||localStorage.getItem('jarvis_inferno_model')||state.model||'openrouter/free'}catch(_){}var r=root();var vs=('speechSynthesis' in window)?speechSynthesis.getVoices():[];var options=vs.map(function(v){return '<option '+(v.name===state.voiceName?'selected':'')+'>'+esc(v.name)+'</option>'}).join('');panel('INFERNO SETTINGS','<label>OpenRouter API key<br><input id="ji-key" type="password" placeholder="Paste your key here" value="'+esc(state.apiKey)+'" style="width:100%;box-sizing:border-box;margin:5px 0;padding:8px;background:#170600;color:#fff;border:1px solid #74300d;border-radius:6px"></label><p style="font-size:10px;color:#b77d5c">The key is stored only in this browser when you choose Save. Do not put it in GitHub source code. A production deployment should use a server-side proxy.</p><label>Model<br><input id="ji-model" value="'+esc(state.model)+'" style="width:100%;box-sizing:border-box;margin:5px 0;padding:8px;background:#170600;color:#fff;border:1px solid #74300d;border-radius:6px"></label><label>Voice<br><select id="ji-voice" style="width:100%;padding:8px;background:#170600;color:#fff;border:1px solid #74300d;border-radius:6px"><option value="">Automatic deep-style system voice</option>'+options+'</select></label><br><button id="ji-save" class="ji-command-btn">SAVE</button> <button id="ji-test" class="ji-command-btn">TEST VOICE</button>');r.querySelector('#ji-save').onclick=function(){state.apiKey=r.querySelector('#ji-key').value.trim();state.model=r.querySelector('#ji-model').value.trim()||'openai/gpt-4o-mini';state.voiceName=r.querySelector('#ji-voice').value;try{localStorage.setItem('jarvis_inferno_openrouter_key',state.apiKey);localStorage.setItem('jarvisOpenRouterKey',state.apiKey);localStorage.setItem('jarvis_inferno_model',state.model);localStorage.setItem('jarvisOpenRouterModel',state.model);localStorage.setItem('jarvis_inferno_voice',state.voiceName);sessionStorage.setItem('jarvisOpenRouterKey',state.apiKey);sessionStorage.setItem('jarvisOpenRouterModel',state.model)}catch(_){}answerPanel('Inferno settings saved locally.');};r.querySelector('#ji-test').onclick=function(){speak('Inferno voice channel online.');};}
async function askAI(command){try{state.apiKey=localStorage.getItem('jarvisOpenRouterKey')||sessionStorage.getItem('jarvisOpenRouterKey')||localStorage.getItem('jarvis_inferno_openrouter_key')||state.apiKey||'';state.model=localStorage.getItem('jarvisOpenRouterModel')||sessionStorage.getItem('jarvisOpenRouterModel')||localStorage.getItem('jarvis_inferno_model')||state.model||'openrouter/free'}catch(_){try{state.apiKey=sessionStorage.getItem('jarvisOpenRouterKey')||state.apiKey||'';state.model=sessionStorage.getItem('jarvisOpenRouterModel')||state.model||'openrouter/free'}catch(__){}}if(!state.apiKey){answerPanel('This capability needs OpenRouter reasoning, but no key was found in this browser session. JARVIS shared OpenRouter settings were checked. Save the key in JARVIS OpenRouter settings, then retry. Local browser and connected-module features should work without an API key.');return}var system='You are JARVIS INFERNO, a powerful but permission-aware browser AI orchestrator. Be concise, accurate and practical. You may plan tasks, research, explain code, analyze failures, draft messages, and route commands to available browser modules. Never claim an action happened unless the browser confirms it. Never request or expose secrets. For sensitive or irreversible actions, require confirmation.';try{var res=await fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+state.apiKey,'HTTP-Referer':location.href,'X-Title':'JARVIS Inferno'},body:JSON.stringify({model:state.model,messages:[{role:'system',content:system},{role:'user',content:command}],temperature:.25})});var data=await res.json();if(!res.ok)throw new Error(data&&data.error&&data.error.message||'OpenRouter request failed');var text=data&&data.choices&&data.choices[0]&&data.choices[0].message&&data.choices[0].message.content||'No response returned.';answerPanel(text)}catch(e){answerPanel('Inferno AI error: '+e.message)}}
function diagnose(){try{state.apiKey=localStorage.getItem('jarvisOpenRouterKey')||sessionStorage.getItem('jarvisOpenRouterKey')||localStorage.getItem('jarvis_inferno_openrouter_key')||state.apiKey||'';state.model=localStorage.getItem('jarvisOpenRouterModel')||sessionStorage.getItem('jarvisOpenRouterModel')||state.model||'openrouter/free'}catch(_){}var tests=[['Network',navigator.onLine],['Secure context',!!window.isSecureContext],['Speech synthesis','speechSynthesis'in window],['Speech recognition',!!(window.SpeechRecognition||window.webkitSpeechRecognition)],['Media devices',!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)],['Wake-word control',!!document.getElementById('jarvis-wake-word-toggle')],['Settings control',!!document.getElementById('jarvis-settings-trigger')],['Beacon bridge',!!window.JARVISBeacon],['Vision bridge',!!window.JARVISVisionIntelligence],['Calling bridge',!!window.JARVISCalling],['Mission bridge',!!window.JARVISMissionControl],['OpenRouter key',!!state.apiKey]];var html=tests.map(function(x){return '<div class="ji-row"><span>'+esc(x[0])+'</span><span class="'+(x[1]?'ji-ok':'ji-bad')+'">'+(x[1]?'OK':'ISSUE')+'</span></div>'}).join('');panel('JARVIS DIAGNOSTICS',html);speak('JARVIS diagnostic scan complete. '+tests.filter(function(x){return x[1]}).length+' of '+tests.length+' checks are available.');}
function list(){panel('INFERNO // '+features.length+' CAPABILITIES','<div>'+features.map(function(f,i){return '<span class="ji-chip">'+(i+1)+'. '+esc(f)+'</span>'}).join('')+'</div>');speak('Inferno capability matrix loaded. '+features.length+' capabilities are registered.');}

function runLocalCapability(name,t,l){var n=String(name||'').toLowerCase();var has=function(o,m){return !!(o&&typeof o[m]==='function')};
if(/diagnostic|health|status|inventory|availability scan|capability readiness|browser compatibility|permission preflight|permission audit|storage audit|performance snapshot|page visibility|wake-word status|speech-engine|microphone diagnostics|camera diagnostics|network diagnostics|ui self-test|session event log|system resource checklist/.test(n)){diagnose();return true}
if(/web navigation|web search|launcher|external web handoff|project navigation/.test(n)){if(has(window.JARVISBeacon,'handleCommand')&&window.JARVISBeacon.handleCommand(t))return true;if(has(window.JARVISOmni,'handleCommand')&&window.JARVISOmni.handleCommand(t))return true;if(has(window.JARVISUniversalRouter,'classify')){var item=window.JARVISUniversalRouter.classify(t);if(item&&item.url){window.open(item.url,'_blank','noopener');answerPanel('Opened '+(item.label||item.url)+'.');return true}}var targets={youtube:'https://www.youtube.com',google:'https://www.google.com',chatgpt:'https://chatgpt.com',claude:'https://claude.ai',grok:'https://grok.com',github:'https://github.com',gmail:'https://mail.google.com',maps:'https://maps.google.com',instagram:'https://www.instagram.com',facebook:'https://www.facebook.com',discord:'https://discord.com/app',telegram:'https://web.telegram.org',spotify:'https://open.spotify.com',netflix:'https://www.netflix.com',amazon:'https://www.amazon.in',reddit:'https://www.reddit.com',wikipedia:'https://www.wikipedia.org'};var openMatch=t.match(/\b(?:open|launch|go to|visit)\s+([a-z0-9.-]+)/i);var target=openMatch?openMatch[1].toLowerCase():'';if(targets[target]){window.open(targets[target],'_blank','noopener,noreferrer');answerPanel('Browser handoff requested for '+target+'. If the browser blocks the new tab, allow pop-ups for this site or open the address manually.');return true}if(/\bsearch\b/i.test(t)){var query=t.replace(/^.*?\bsearch\b/i,'').trim()||t;window.open('https://www.google.com/search?q='+encodeURIComponent(query),'_blank','noopener,noreferrer');answerPanel('Browser search handoff requested for: '+query);return true}if(/launcher/.test(n)){answerPanel('Available direct browser launchers: '+Object.keys(targets).join(', ')+'. Try “open YouTube” or “open GitHub”.');return true}}
if(/mission|checkpoint|priority queues|task status summary|long-task checkpoint ledger|goal-to-action compiler|dependency graph planner/.test(n)){if(has(window.JARVISMissionControl,'handleCommand')&&window.JARVISMissionControl.handleCommand(t))return true;var goal=t.replace(/^(?:inferno[, ]*)?(?:activate|run|use|show|help with)?\s*(?:multi-step mission planning|mission checkpoints|mission resume|priority queues|adaptive mission decomposition|goal-to-action compiler)?\s*/i,'').trim()||t;var plan=[['1 • DEFINE','Clarify the goal and success criteria'],['2 • DECOMPOSE','Split the goal into small, verifiable tasks'],['3 • EXECUTE','Complete one task at a time and record blockers'],['4 • VERIFY','Check each result against the success criteria'],['5 • CLOSE','Summarize outcomes and remaining work']];try{var missions=JSON.parse(localStorage.getItem('inferno_local_missions')||'[]');missions.unshift({goal:goal,createdAt:new Date().toISOString(),status:'planned',steps:plan.map(function(x){return {title:x[0],detail:x[1],done:false}})});localStorage.setItem('inferno_local_missions',JSON.stringify(missions.slice(0,30)))}catch(_){}answerPanel('LOCAL MISSION PLAN\\nGoal: '+goal+'\\n\\n'+plan.map(function(x){return x[0]+' — '+x[1]}).join('\\n')+'\\n\\nSaved in this browser as a plan. Inferno has not executed external actions.');return true}
if(/vision|ocr|image-analysis|ui element detection|visual comparison|chart interpretation|error-screen interpretation/.test(n)){if(has(window.JARVISVisionIntelligence,'handleCommand')&&window.JARVISVisionIntelligence.handleCommand(t))return true;answerPanel('Vision Intelligence needs its vision bridge and the appropriate camera/image permission. The bridge is '+(window.JARVISVisionIntelligence?'present':'not exposed')+' on this page. Open Vision Intelligence in the main JARVIS HUD for image-specific actions.');return true}
if(/email|whatsapp|call handoff|message tone/.test(n)&&has(window.JARVISCalling,'handleCommand')){if(window.JARVISCalling.handleCommand(t))return true}
if(/reminder|calendar planning/.test(n)&&has(window.JARVISAdvancedModules,'handleCommand')){if(window.JARVISAdvancedModules.handleCommand(t))return true}
if(/oracle|decision scoring|what-if branch|risk and mitigation|scenario simulation/.test(n)&&has(window.JARVISPowerModules,'handleCommand')){if(window.JARVISPowerModules.handleCommand(t))return true}
if(/ghost operator|safe action preview/.test(n)&&has(window.JARVISPowerModules,'handleCommand')){if(window.JARVISPowerModules.handleCommand(t))return true}
if(/youtube workflow|youtube launcher/.test(n)&&has(window.JARVISYouTubeUpload,'openSettings')){window.JARVISYouTubeUpload.openSettings();return true}
if(/speech cancellation|voice-rate control|voice-pitch control|voice selection|deep-voice preference|speech feedback prevention|voice session recovery|voice result narration/.test(n)){if(/stop speaking|cancel voice output/i.test(t)){if(window.speechSynthesis)window.speechSynthesis.cancel();answerPanel('Speech output stopped locally.');return true}if(/^speak\s+/i.test(t)){speak(t.replace(/^speak\s+/i,''));return true}answerPanel('Local voice controls: speech synthesis '+('speechSynthesis'in window?'available':'unavailable')+'; speech recognition '+(window.SpeechRecognition||window.webkitSpeechRecognition?'available':'unavailable')+'. Use “speak [text]” or “stop speaking” for direct local control.');return true}
return false}
function isLocalFeature(n){return /diagnostic|health|status|inventory|availability|browser|permission|storage|performance|page visibility|wake-word|microphone|camera|speech-engine|ui self-test|launcher|navigation|web search|mission|reminder|call|whatsapp|vision|ocr|youtube|speech cancellation|voice-rate|voice-pitch/i.test(n)}
function routeFeatureCommand(t,l){var hit=features.find(function(f){var n=f.toLowerCase();return n.length>6&&(l.indexOf(n)>=0||l.indexOf('activate '+n)>=0||l.indexOf('run '+n)>=0||l.indexOf('help with '+n)>=0)});if(!hit)return false;if(runLocalCapability(hit,t,l))return true;askAI('INFERNO CAPABILITY: '+hit+'\nTask class: '+(isLocalFeature(hit)?'Use local browser APIs or connected JARVIS modules first; do not ask for an API key if a local handler can do the task.':'Use OpenRouter reasoning for analysis/planning, and use connected local modules for real actions. State limitations honestly.')+'\nInterpret the command flexibly and perform the assigned task, not merely describe the feature. Never claim completion unless confirmed.\nUSER COMMAND: '+t);return true}
function exec(cmd){var t=String(cmd||'').trim(),l=t.toLowerCase();if(!t)return;if(/^(?:(?:hey|hello|hi|ok|okay)\s+)?inferno[.!?, ]*$/.test(l)){if(window.JARVISInferno&&window.JARVISInferno.isActive&&window.JARVISInferno.isActive()){speak('Inferno is released. What’s in your mind?');return}return}if(/^(return|exit|close)\s+inferno|back to jarvis/.test(l)){if(window.JARVISInferno&&window.JARVISInferno.restore)window.JARVISInferno.restore();return}if(/settings/.test(l)){settings();return}if(/diagnose|health|status/.test(l)&&/jarvis|system|inferno|this/.test(l)){diagnose();return}if(/diagnos|health check|system status|capability readiness/.test(l)){diagnose();return}if(/features|capabilities|powers/.test(l)){list();return}if(/^(open|launch|go to|visit)\s+(youtube|google|chatgpt|claude|grok|github|gmail|maps|instagram|facebook|discord|telegram|spotify|netflix|amazon|reddit|wikipedia)\b/i.test(t)){var om=t.match(/^(?:open|launch|go to|visit)\s+([a-z0-9.-]+)/i);var urls={youtube:'https://www.youtube.com',google:'https://www.google.com',chatgpt:'https://chatgpt.com',claude:'https://claude.ai',grok:'https://grok.com',github:'https://github.com',gmail:'https://mail.google.com',maps:'https://maps.google.com',instagram:'https://www.instagram.com',facebook:'https://www.facebook.com',discord:'https://discord.com/app',telegram:'https://web.telegram.org',spotify:'https://open.spotify.com',netflix:'https://www.netflix.com',amazon:'https://www.amazon.in',reddit:'https://www.reddit.com',wikipedia:'https://www.wikipedia.org'};var dest=om&&urls[om[1].toLowerCase()];if(dest){window.open(dest,'_blank','noopener,noreferrer');answerPanel('Browser handoff requested for '+om[1]+'. If the browser blocks the new tab, allow pop-ups or open the site manually.');return}}if(/^(?:search|google search)\s+/i.test(t)){var q=t.replace(/^(?:google\s+)?search\s+/i,'').trim();window.open('https://www.google.com/search?q='+encodeURIComponent(q),'_blank','noopener,noreferrer');answerPanel('Browser search handoff requested for: '+q);return}if(/^(?:start|create|begin|plan)\s+(?:a\s+)?mission\b/i.test(t)){var goal=t.replace(/^(?:start|create|begin|plan)\s+(?:a\s+)?mission(?:\s+to)?\s*/i,'').trim()||'Unspecified goal';var steps=['Define the goal and success criteria','Break the goal into small tasks','Work through each task and record blockers','Verify outcomes against the criteria','Summarize results and remaining work'];try{var saved=JSON.parse(localStorage.getItem('inferno_local_missions')||'[]');saved.unshift({goal:goal,createdAt:new Date().toISOString(),status:'planned',steps:steps});localStorage.setItem('inferno_local_missions',JSON.stringify(saved.slice(0,30)))}catch(_){}answerPanel('LOCAL MISSION PLAN\\nGoal: '+goal+'\\n\\n'+steps.map(function(s,i){return (i+1)+'. '+s}).join('\\n')+'\\n\\nSaved in this browser as a plan. No external actions were executed.');return}if(/^speak\s+/.test(l)){speak(t.replace(/^speak\s+/i,''));return}if(/^(think|reason|analy[sz]e|research|plan|explain|what happens|what if|compare|summari[sz]e)\b/i.test(t)){askAI(t);return}if(routeFeatureCommand(t,l))return;if(/\b(draft|write)\b.*\bemail\b/i.test(t)){var b=t.replace(/^.*?email\s*/i,'');var a='mailto:?subject='+encodeURIComponent('JARVIS Inferno draft')+'&body='+encodeURIComponent(b);window.open(a,'_blank');speak('Email draft prepared.');return}if(window.JARVISBeacon&&window.JARVISBeacon.handleCommand){try{if(window.JARVISBeacon.handleCommand(t))return}catch(_){} }if(window.JARVISMissionControl&&/mission|task|execute|run/i.test(t)){try{window.JARVISMissionControl.handleCommand(t);return}catch(_){} }askAI(t)}
function activate(){if(state.active)return;state.active=true;var r=root();if(r)r.classList.add('active');if(window.INXHeadEye&&window.INXHeadEye.enable)try{window.INXHeadEye.enable()}catch(_){}if(window.JARVISHeadEye&&window.JARVISHeadEye.enable)try{window.JARVISHeadEye.enable()}catch(_){} }
 function deactivate(){state.active=false;try{if('speechSynthesis'in window)speechSynthesis.cancel()}catch(_){} }
function init(){window.JARVISInfernoV2={version:'2.1.0',features:features,activate:activate,deactivate:deactivate,execute:exec,diagnose:diagnose,settings:settings,speak:speak};window.addEventListener('jarvis:command',function(e){var c=e.detail&&e.detail.command||e.detail||'';if(/inferno/i.test(c)&&/release|open|activate|come out/i.test(c))activate();else if(state.active)exec(c)});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
setTimeout(function(){try{if(window.JARVISInferno&&window.JARVISInferno.isActive&&window.JARVISInferno.isActive())activate()}catch(_){}},0);
})();

/* INFERNO EXECUTION LAYER v1.0 — concrete browser actions, receipts, and honest fallbacks.
   This layer is intentionally additive: it wraps the existing command router and leaves
   the original capability catalogue and JARVIS repository untouched. */
(function(){
'use strict';
if(window.__INFERNO_EXECUTION_LAYER__)return;
window.__INFERNO_EXECUTION_LAYER__=true;
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])})}
function panel(title,body){var r=document.getElementById('jarvis-inferno');if(!r)return;var p=r.querySelector('#ji-panel');if(!p)return;p.innerHTML='<div class="ji-panel"><button class="ji-close" aria-label="Close">×</button><div class="ji-title">'+esc(title)+'</div><div style="white-space:pre-wrap;color:#ffe2bd;overflow-wrap:anywhere">'+body+'</div></div>';p.firstElementChild.querySelector('.ji-close').onclick=function(){p.innerHTML=''}}
function say(title,text){panel(title,esc(text));try{if(window.JARVISInfernoV2&&window.JARVISInfernoV2.speak)window.JARVISInfernoV2.speak(text)}catch(_){};record(title,text)}
function record(kind,text){try{var h=JSON.parse(localStorage.getItem('inferno_execution_log')||'[]');h.unshift({at:new Date().toISOString(),kind:kind,result:String(text).slice(0,500)});localStorage.setItem('inferno_execution_log',JSON.stringify(h.slice(0,60)))}catch(_){}}
function getStore(key,fallback){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch(_){return fallback}}
function setStore(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch(_){return false}}
function calc(expr){
 var s=expr.replace(/\s+/g,'');if(!s||!/^[0-9.+\-*/()%]+$/.test(s))return null;var i=0;
 function atom(){if(s[i]==='+'){i++;return atom()}if(s[i]==='-'){i++;return -atom()}if(s[i]==='('){i++;var v=sum();if(s[i++]!==')')throw Error('Missing closing parenthesis');return v}var start=i;while(/[0-9.]/.test(s[i]||'')&&i<s.length)i++;if(start===i)throw Error('Expected a number');var v=Number(s.slice(start,i));if(!Number.isFinite(v))throw Error('Invalid number');if(s[i]==='%'){i++;v/=100}return v}
 function product(){var v=atom();while(i<s.length&&/[*/]/.test(s[i])){var op=s[i++],n=atom();if(op==='/'&&n===0)throw Error('Cannot divide by zero');v=op==='*'?v*n:v/n}return v}
 function sum(){var v=product();while(i<s.length&&/[+\-]/.test(s[i])){var op=s[i++],n=product();v=op==='+'?v+n:v-n}return v}
 try{var result=sum();if(i!==s.length||!Number.isFinite(result))return null;return String(Number(result.toPrecision(12)))}catch(_){return null}
}
function openTarget(raw){var q=raw.trim(),known={youtube:'https://www.youtube.com',google:'https://www.google.com',chatgpt:'https://chatgpt.com',claude:'https://claude.ai',grok:'https://grok.com',github:'https://github.com',gmail:'https://mail.google.com',maps:'https://maps.google.com',instagram:'https://www.instagram.com',facebook:'https://www.facebook.com',discord:'https://discord.com/app',telegram:'https://web.telegram.org',spotify:'https://open.spotify.com',netflix:'https://www.netflix.com',amazon:'https://www.amazon.in',reddit:'https://www.reddit.com',wikipedia:'https://www.wikipedia.org'};var key=q.toLowerCase().replace(/\s+(website|site|app)$/,'');var url=known[key];if(!url){if(/^https?:\/\//i.test(q)){try{var u=new URL(q);if(!/^https?:$/.test(u.protocol))return false;url=u.href}catch(_){return false}}else if(/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(q)){url='https://'+q}else return false}window.open(url,'_blank','noopener,noreferrer');say('BROWSER HANDOFF','Requested '+url+'. If no tab appeared, the browser may have blocked the pop-up; allow pop-ups for this site and retry.');return true}
function executeLocal(command){
 var t=String(command||'').trim(),l=t.toLowerCase(),m;
 if(!t)return true;
 if(/^(?:what(?:'s| is) the )?(?:time|date)(?: right now| today)?\??$/.test(l)||/\bwhat time is it\b/.test(l)){say('CHRONOLOGY TELEMETRY','Local device time: '+new Date().toLocaleString()+'\nTimezone: '+(Intl.DateTimeFormat().resolvedOptions().timeZone||'browser default'));return true}
 if((m=t.match(/^(?:calculate|compute|what is|what's)\s+(.+?)\??$/i))&&/[0-9][0-9.+\-*/()%\s]*$/.test(m[1])){var value=calc(m[1].replace(/\?$/,''));if(value!==null){say('QUANTUM CALCULATOR',m[1]+' = '+value);return true}}
 if((m=t.match(/^(?:open|launch|visit|go to)\s+(.+)$/i)))return openTarget(m[1]);
 if((m=t.match(/^(?:search(?: the web)?(?: for)?|google search)\s+(.+)$/i))){var url='https://www.google.com/search?q='+encodeURIComponent(m[1]);var win=window.open(url,'_blank','noopener,noreferrer');say(win?'SEARCH HANDOFF':'POP-UP BLOCKED',(win?'Search opened for: ':'The browser blocked search for: ')+m[1]);return true}
 if(/^(?:scroll to top|go to top)$/.test(l)){window.scrollTo({top:0,behavior:'smooth'});say('VIEWPORT CONTROL','Scrolled to the top of the current page.');return true}
 if(/^(?:scroll to bottom|go to bottom)$/.test(l)){window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'});say('VIEWPORT CONTROL','Scrolled to the bottom of the current page.');return true}
 if(/^(?:go )?back$/.test(l)){if(history.length>1){history.back();record('NAVIGATION','Back navigation requested')}else say('NAVIGATION','There is no previous page in this tab.');return true}
 if(/^(?:stop speaking|stop voice|cancel speech)$/.test(l)){try{if(window.speechSynthesis)window.speechSynthesis.cancel()}catch(_){}say('VOICE CHANNEL','Speech output stopped.');return true}
 if((m=t.match(/^(?:save|create|remember)\s+(?:a\s+)?note(?:\s*[:\-]\s*|\s+about\s+|\s+)(.+)$/i))){var notes=getStore('inferno_notes',[]);notes.unshift({text:m[1].trim(),at:new Date().toISOString()});if(!setStore('inferno_notes',notes.slice(0,100)))say('NOTE STORAGE ERROR','Browser storage is unavailable. No note was saved.');else say('LOCAL KNOWLEDGE VAULT','Note saved in this browser: '+m[1].trim());return true}
 if(/^(?:list|show|read)\s+(?:my\s+)?notes$/.test(l)){var ns=getStore('inferno_notes',[]);say('LOCAL KNOWLEDGE VAULT',ns.length?ns.slice(0,30).map(function(n,i){return (i+1)+'. '+n.text+' ['+new Date(n.at).toLocaleString()+']'}).join('\n'):'No notes are saved in this browser yet.');return true}
 if((m=t.match(/^(?:copy|copy to clipboard)\s+(.+)$/i))){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(m[1]).then(function(){say('CLIPBOARD LINK','Text copied to clipboard.')}).catch(function(){say('CLIPBOARD PERMISSION','Clipboard write was blocked. Select and copy this text manually: '+m[1])})}else say('CLIPBOARD FALLBACK','Clipboard access is unavailable here. Copy manually: '+m[1]);return true}
 if(/^(?:show|read|list)\s+(?:my\s+)?(?:execution log|task history|recent actions)$/.test(l)){var logs=getStore('inferno_execution_log',[]);say('MISSION FLIGHT RECORDER',logs.length?logs.slice(0,20).map(function(x){return new Date(x.at).toLocaleString()+' • '+x.kind+' • '+x.result}).join('\n'):'No recorded actions yet.');return true}
 if(/^(?:read|inspect)\s+(?:this\s+)?page$/.test(l)){var text=(document.body.innerText||'').replace(/\s+/g,' ').trim().slice(0,6000);say('ACTIVE VIEWPORT INTELLIGENCE','Title: '+document.title+'\nURL: '+location.href+'\nVisible text excerpt:\n'+(text||'No readable page text was found.'));return true}
 if(/^(?:summari[sz]e|explain)\s+(?:this\s+)?page$/.test(l)){var excerpt=(document.body.innerText||'').replace(/\s+/g,' ').trim().slice(0,7000);if(window.JARVISInfernoV2&&window.JARVISInfernoV2.execute){window.JARVISInfernoV2.execute('Summarize this current webpage accurately. Page title: '+document.title+'; URL: '+location.href+'; visible page text: '+excerpt);return true}}
 if(/^(?:show|list)\s+(?:all\s+)?(?:capabilities|features|powers)$/.test(l)){if(window.JARVISInfernoV2&&window.JARVISInfernoV2.features){say('CAPABILITY MATRIX',window.JARVISInfernoV2.features.map(function(x,i){return (i+1)+'. '+x}).join('\n'));return true}}
 if((m=t.match(/^(?:set|create)\s+(?:a\s+)?reminder\s+(?:in\s+)?(\d+)\s*(seconds?|secs?|minutes?|mins?|hours?|hrs?)\s+(?:to|for|about)\s+(.+)$/i))){var num=Number(m[1]),unit=m[2].toLowerCase(),delay=num*(/^h/.test(unit)?3600000:/^m/.test(unit)?60000:1000),message=m[3];if(delay>0&&delay<=86400000){var fire=function(){var msg='INFERNO REMINDER\n'+message;try{if('Notification'in window&&Notification.permission==='granted')new Notification('INFERNO // Reminder',{body:message});}catch(_){}say('REMINDER ALERT',msg)};try{var reminders=getStore('inferno_reminders',[]);reminders.unshift({text:message,at:new Date(Date.now()+delay).toISOString(),status:'scheduled in this open page'});setStore('inferno_reminders',reminders.slice(0,50))}catch(_){}if('Notification'in window&&Notification.permission==='default'){try{Notification.requestPermission()}catch(_){}}window.setTimeout(fire,delay);say('REMINDER SCHEDULED','Reminder set for '+new Date(Date.now()+delay).toLocaleTimeString()+'. Keep this INFERNO page open; browser timers do not guarantee alerts after the page closes.');return true}}
 return false;
}
function install(){var api=window.JARVISInfernoV2;if(!api||api.__executionWrapped)return;var original=api.execute;if(typeof original!=='function')return;api.execute=function(command){try{if(executeLocal(command))return true}catch(e){say('EXECUTION FAULT','Local handler failed safely: '+(e&&e.message||e));return false}record('AI ROUTER','Command delegated to the existing capability/AI router: '+String(command).slice(0,240));return original.call(api,command)};api.__executionWrapped=true;api.executionLayerVersion='1.0.0';api.executionLog=function(){return getStore('inferno_execution_log',[])};api.localNotes=function(){return getStore('inferno_notes',[])}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
setTimeout(install,0);
})();
