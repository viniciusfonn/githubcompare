import React , { Component}  from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Container, Form }  from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
      state = {
            repositoryInput:'',
            repositories: [

            ],
      };

      handleAddRepository = async (event) => {
            event.preventDefault();

            try {
                  const response = await api.get(`/repos/${this.state.repositoryInput}`);

                  this.setState({
                        repositoryInput: '',
                        repositories: [...this.state.repositories, response.data],
                  });
            }catch(err){
                  console.log(err);
            }
      }
      render(){
            return (
                  <Container>
                  <img src={logo} alt="GitHub Compare"/>

                  <Form action="" onSubmit={this.handleAddRepository}>
                        <input  type="text" placeholder="Usuário/Repositório" value ={this.state.repositoryInput}
                        onChange={event =>this.setState({ repositoryInput: event.target.value })}
                        />
                        <button type="submit">+</button>
                  </Form>
                  <CompareList repositories = {this.state.repositories} />
            </Container>
            );
      }
}


