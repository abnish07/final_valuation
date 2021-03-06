import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import BookDisplay from './BookDisplay';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { bookData } = this.props
        console.log("bookdata", bookData)
        return ( 
            <>
            <div>
                <Category />
            </div>
            <div className="gridBox">
                <BookDisplay bookData={bookData} />
                </div>
                </>
         );
    }
}

const mapStateToProps=(state)=>({
    bookData: state.dataReducer.bookData
})

// export default connect (mapStateToProps, null)(Home);