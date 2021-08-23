import React from 'react';
import Category from './CategoryComponent';
import Todo from './TodoComponent';

const Home = (props) => {
    return(
        <div className="container">
            <div>Home</div>
            <Category/>
            <Todo/>
        </div>
    );
}
export default Home;