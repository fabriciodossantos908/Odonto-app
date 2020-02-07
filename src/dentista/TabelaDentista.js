import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>CODIGO</th>
        <th>NOME</th>
        <th>TELEFONE</th>
        <th colSpan="2">AÇÕES</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {

  const dentistas = props.dentistas.map((dentista) => {
    return (
      <tr key={dentista.codigo}>
        <td>{dentista.codigo}</td>
        <td>{dentista.nome}</td>
        <td>{dentista.telefone}</td>
        <td>
          <button className="btn btn-warning btn-sm"
          onClick={() => {
            props.consultarDentista(dentista.codigo)
          }}>
            <i class="far fa-edit"></i>
          </button>
        </td>
        <td><button className="btn btn-danger btn-sm"
          onClick={() => {
            if (window.confirm('Confirma a exclusão?')) {
              props.excluirDentistas(dentista.codigo)
            }
          }}>
          <i class="far fa-trash-alt"></i>
        </button></td>
      </tr>
    );
  });

  return (
    <tbody>
      {dentistas}
    </tbody>
  )

}

class TabelaDentista extends Component {

  render() {

    const { dentistas, excluirDentistas, consultarDentista } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h5>Lista de dentistas</h5>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <TableHead />
            <TableBody dentistas={dentistas} excluirDentistas={excluirDentistas} consultarDentista={consultarDentista} />
          </table>
        </div>
      </div>
    );
  }
}

export default TabelaDentista;