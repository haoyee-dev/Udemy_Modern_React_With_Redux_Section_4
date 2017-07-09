import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this
            .props
            .books
            .map((book) => {
                return (
                    <li className="list-group-item" key={book.title} onClick={() => this.props.selectBook(book)}>
                        {book.title}
                    </li>
                )
            })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// state refers to the overall state in redux
function mapStateToProps(state) {
    //whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

// Anything returned will send up as props on BookList container
function mapDispatchToProps(dispatch) {
    // when selectBook is called, result is passed to all reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);// dispatch is the funnel that sends the result to everyone
}

// connects a function and a component and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);