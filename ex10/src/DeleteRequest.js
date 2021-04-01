import React from 'react';
//class
class DeleteRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: null };
    }
componentDidMount() {
 
  
    fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
    .then(response => response.json() )
    .then(() => this.setState({ status : 'Delete successful' }));
        
}
render() {
    const { postId } = this.state;
    return (
        <div className='card text-center m-3'>
            <h5 className='card-header'>Simple DELETE Request</h5>
                <div className='card-body'>Status: {postId}
                  </div>
        </div>
    );
}
}
export default DeleteRequest;