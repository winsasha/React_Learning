import React from 'react';

export class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            pass: "",
            submitBtn: "disabled"
        }
    }

    sendForm(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("lastname", this.state.lastname);
        formData.append("email", this.state.email);
        formData.append("pass", this.state.pass);
        fetch('http://n91045rw.beget.tech/php/handlerReg.php', {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
            })
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        if (name === "email") {
            const formData = new FormData();
            formData.append("email", value);
            fetch('http://n91045rw.beget.tech/php/handlerReg.php', {
                method: "POST",
                body: formData
            }).then(response => response.json())
                .then(result => {
                    if (result.result === "exist") {
                        this.setState({
                            submitBtn: "disabled",
                            info: "Такой e-mail уже существует!"
                        })
                    } else {
                        this.setState({
                            submitBtn: "",
                            info: ""
                        })
                    }
                });
        }
        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className="col-md-5 my-5 mx-auto">
                <h2 className="text-center my-5">Регистрация</h2>
                <form onSubmit={this.sendForm}>
                    <div className="mb-3">
                        <input value={this.state.name} onChange={this.handleInputChange} name="name" type="text" className="form-control" placeholder="Ваше имя" required/>
                    </div>
                    <div className="mb-3">
                        <input value={this.state.lastname} onChange={this.handleInputChange} name="lastname" type="text" className="form-control" placeholder="Ваша фамилия" required/>
                    </div>
                    <div className="mb-3">
                        <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Ваш e-mail" />
                    </div>
                    <div className="mb-3">
                        <input value={this.state.pass} onChange={this.handleInputChange} name="pass" type="password" className="form-control" placeholder="Придумайте пароль" required/>
                    </div>
                    <div className="mb-3">
                        <input type="submit" disabled={this.state.submitBtn} className="form-control btn btn-primary" value="Зарегистрироваться"/>
                    </div>
                </form>
        </div>
    }
}