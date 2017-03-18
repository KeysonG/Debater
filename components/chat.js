var React = require('react');
var io = require("socket.io-client");
var $ = require('jquery');

var Chat = React.createClass({
	getInitialState: function(){
		return{
			messages:[]
		}
	},
	componentDidMount: function(){
		var socket = io.connect('http://localhost:3000');
		var self = this;
		socket.on('chat message', function(message) {
			var messages = self.state.messages;
			messages.push(message);
			self.setState({
				messages:messages
			})
			
		})
	},

	sendMessage: function(event){
		event.preventDefault();

		var socket = io.connect('http://localhost:3000');
		var messageText = $(".chat textarea").val();
		var message = {
			text:messageText,
			author: "Tali",
			likes:0,
			id:0
		}
		socket.emit('chat message', message);
	},
	render:function(){
		return(
			<div  className = 'chat col-md-2'>
			<Chatfeed messages = {this.state.messages} />
			<Chatinput sendMessage = {this.sendMessage} />
			</div>
			)
	}
});
var Chatfeed = React.createClass({
	
	render: function(){
		var messages_list = this.props.messages.map((message,index) => {
			return(
				<Message message ={message} key = {index} />
				)
		})
		return(
			<div>
			<h3>Free Chat</h3>
			<div className="messages">

			{ messages_list }
			</div>
			</div>
			)
	}
});

var Message = React.createClass({
	render:function(){
		return(
			<div className = "comment">
			<div className="user-name">{this.props.message.author}</div>
			<p className="comment-text">{this.props.message.text}</p>
			<div className="likes">{this.props.message.likes} <i className="fa fa-heart" aria-hidden="true"></i></div>
			</div>
			)
	}
});

var Chatinput = React.createClass({
	render: function(){
		return(
			<form onSubmit = {this.props.sendMessage} className="chat-input">
			<textarea name="" id="" placeholder="Write your thoughts..." />
			<input type="submit" />
			</form>
			)


	}
});

module.exports = Chat