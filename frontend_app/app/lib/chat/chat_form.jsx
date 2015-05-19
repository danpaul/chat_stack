module.exports = React.createClass({
    getInitialState: function(){
        return({comment: ''});
    },
    handleInputChange: function(e){
        this.setState({comment: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();
        this.props.postComment(this.state.comment);
        this.setState({comment: ''});
    },
    render: function(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.comment}
                        onChange={this.handleInputChange} />
                    <button
                        onClick={this.handleSubmit} >Add Comment</button>
                </form>
            </div>
        );
    }
});