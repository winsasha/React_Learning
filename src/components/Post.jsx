import React from "react";

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date_added: "",
            text: "",
            author: "",
        }
    }

    componentDidMount() {
        let formData = new FormData();
        formData.append("id", this.props.match.params.id);
        fetch("http://n91045rw.beget.tech/php/getPost.php", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                this.setState({
                    title: result.title,
                    date_added: result.date_added,
                    text: result.text,
                    author: result.author
                })
            })
    }

    render() {
        return <div>
            <h2 className="text-center">{this.state.title}</h2>
            <p>Дата добавления статьи: {this.state.date_added}</p>
            <p>Автор: {this.state.author}</p>
            <p>{this.state.text}</p>
        </div>
    }
}



