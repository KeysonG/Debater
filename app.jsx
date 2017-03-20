var React = require('react');
var ReactDOM = require('react-dom');
var Debate = require('./components/debate');
var DebateChat = require('./components/chat');


var round1 = {
	round: 1,
	name:"Round 1",
	time:2,
	event:"Introduction"
};
var round2={
	round: 2,
	name:"Round 2",
	time:3,
	event:"Arguments"
};
var round3={
	round: 3,
	name:"Round 3",
	time:4,
	event:"Conclusion"
};

var debateSettings = {
	rounds:[round1,round2,round3],
	topic: "THERE SHOULD BE A QUOTA FOR WOMEN IN GOVERNMENT",
	
};




ReactDOM.render(
		<div>
			<header className="clearfix">
				<div className="logo">
					<img src="assets/placeholder/logo.png" alt=""/>
				</div>
				<nav>
					<ul>
						<li>Log in</li>
						<li>Sign up</li>
					</ul>
				</nav>
			</header>
			<main>
				<div className="debate-wrapper container">
			   		<Debate debateSettings = {debateSettings}/>
	   		 		<DebateChat />
	   		 	</div>
	   		</main>
   		 </div>,
    document.getElementById('root')
)
