import React from 'react';

class Source extends React.Component{
    render(){
        const {id, title, author, publisher, year} = this.props.source;
        return (
            <li key={id}>
                {author.lastName}, {author.firstName}. <cite>{title}</cite>. {publisher}, {year}.
            </li>
        )
    }
}

export default Source;