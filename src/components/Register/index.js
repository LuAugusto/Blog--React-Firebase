import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../firebase';
import './register.css';

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      senha:'',
      nome:''
    };
    this.register = this.register.bind(this);    
    this.onRegister = this.onRegister.bind(this);    
  }
  register(e){
    e.preventDefault();
    this.onRegister();
  }
  onRegister = async () =>{
      try{
        const {email,senha,nome} = this.state;
        await firebase.register(nome,senha,email);
        this.props.history.replace('/dashboard');

      }catch(error){
        alert(error.message);
      }
  }

  
  render(){
    return(
      <div>
        <h1 className="register-h1">Novo Usuario</h1>
        <form onSubmit={this.register} id="register">

          <label>Nome:</label>
          <input type="text" autoComplete="off" autoFocus value={this.state.nome}
          onChange={ (e) => this.setState({nome:e.target.value})}
          placeholder="nome"
          /><br/> 

          <label>Email:</label>
          <input type="email" autoComplete="off" autoFocus 
          value={this.state.email}
          onChange={ (e) => this.setState({email:e.target.value})}
          placeholder="seu@email.com"
          /><br/> 

          <label>Password:</label>
          <input type="password" autoComplete="off" value={this.state.senha}
          onChange={ (e) => this.setState({senha:e.target.value})}
          placeholder="Sua senha"
          /><br/>      

          <button type="submit">Cadastrar</button>
          <Link to="/login">Já tem uma conta? faça login.</Link>                         
        </form>
      </div>
    );
  }
}

export default withRouter(Register);