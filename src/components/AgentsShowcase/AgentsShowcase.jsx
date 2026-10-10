import {useState} from "react";
import {SectionTitle} from "../Shared/SectionTitle";
import {ImageViewer, useImageViewer} from "../Shared/ImageViewer";
import {agentsShowcase} from "../../utils/constants";
import "./agents-showcase.css";

const workflow = [
  {name: "Context", title: "Good work starts with good context.", description: "Before opening a task, I make the problem, the constraints, and the existing code clear.", human: "Define the outcome and the boundaries.", agent: "Explore the codebase and surface the relevant pieces.", output: "A shared understanding of the task", icon: "fa-compass"},
  {name: "Plan", title: "Agree on the route before building.", description: "I use plan mode to turn the problem into concrete steps. I review, edit, or reject the approach before implementation.", human: "Challenge assumptions and approve the approach.", agent: "Propose steps, tradeoffs, and files to change.", output: "A reviewed implementation plan", icon: "fa-route"},
  {name: "Build", title: "Parallel tools. One clear direction.", description: "Terminal agents work on the implementation while I stay in the editor, keeping the product and the code in view.", human: "Steer decisions and inspect changes as they land.", agent: "Implement the scoped work with repository context.", output: "A focused, inspectable diff", icon: "fa-code"},
  {name: "Review", title: "Every diff gets a second look.", description: "Review agents scan for correctness and style. I read the changes, resolve feedback, and check the resulting behavior.", human: "Make the final call on quality and behavior.", agent: "Find edge cases and flag issues in the diff.", output: "Reviewed changes, ready for a final check", icon: "fa-magnifying-glass"},
  {name: "Ship", title: "The final decision stays with me.", description: "I bring the work back to the original goal, check the experience, and decide what is ready to commit.", human: "Verify the result and own the commit.", agent: "Summarize changes and any remaining limitations.", output: "A change I can explain and stand behind", icon: "fa-rocket"},
];
const workspaceImages = [agentsShowcase[0]];

export const AgentsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {isOpen, initialIndex, openViewer, setIsOpen} = useImageViewer();
  const step = workflow[currentIndex];

  const onTabKeyDown = event => {
    const next = event.key === "ArrowRight" ? (currentIndex + 1) % workflow.length
      : event.key === "ArrowLeft" ? (currentIndex + workflow.length - 1) % workflow.length
        : event.key === "Home" ? 0 : event.key === "End" ? workflow.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    setCurrentIndex(next);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[next].focus();
  };

  return (
    <section className="agents-showcase-section">
      <SectionTitle iconClass="fa-solid fa-robot" title="How I work with AI agents" subtitle="Human direction. Agent execution. Shared context." />
      <div className="agent-workbench">
        <div className="agent-workbench-header"><span><i className="fa-solid fa-terminal" aria-hidden="true" /> THE WORKFLOW</span><span className="agent-human-led"><span /> Human-led, every step</span></div>
        <div className="agent-tabs" role="tablist" aria-label="Agent workflow">
          {workflow.map((item, index) => <button key={item.name} type="button" role="tab" id={`workflow-tab-${index}`} aria-controls="workflow-panel" aria-selected={index === currentIndex} tabIndex={index === currentIndex ? 0 : -1} onKeyDown={onTabKeyDown} onClick={() => setCurrentIndex(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.name}<i className={`fa-solid ${item.icon}`} aria-hidden="true" /></button>)}
        </div>
        <div className="agent-workbench-body">
          <div className="agent-step" id="workflow-panel" role="tabpanel" aria-labelledby={`workflow-tab-${currentIndex}`} tabIndex={0}>
            <div className="agent-step-copy" key={currentIndex}>
              <span className="agent-step-kicker">STEP {String(currentIndex + 1).padStart(2, "0")} / {step.name.toUpperCase()}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <dl className="agent-responsibilities"><div><dt><span className="agent-role-dot human" /> I own</dt><dd>{step.human}</dd></div><div><dt><span className="agent-role-dot" /> Agents handle</dt><dd>{step.agent}</dd></div></dl>
            </div>
          </div>
          <figure className="agent-workspace">
            <div className="agent-workspace-bar"><span /><span /><span /><small>Inside my workspace</small></div>
            <button type="button" onClick={() => openViewer(0)} aria-label="View agent workspace fullscreen"><img src={workspaceImages[0].uri} alt={workspaceImages[0].alt} loading="lazy" /><span className="agent-expand"><i className="fa-solid fa-expand" aria-hidden="true" /> Explore workspace</span></button>
            <figcaption><span className="agent-role-dot" /> Cursor + terminal agents <span>One repo. A continuous feedback loop.</span></figcaption>
          </figure>
        </div>
        <div className="agent-workbench-footer"><p><span>OUTPUT</span>{step.output}</p><button type="button" onClick={() => setCurrentIndex(index => (index + 1) % workflow.length)}>{currentIndex === workflow.length - 1 ? "Back to context" : "Next step"}<span aria-hidden="true">↗</span></button></div>
      </div>
      <ImageViewer images={workspaceImages} initialIndex={initialIndex} open={isOpen} onOpenChange={setIsOpen} />
    </section>
  );
};
