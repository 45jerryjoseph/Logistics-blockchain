import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Tender Title</th>
          <th>Deadline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tender Document For the Supply of Laboratory Commodities </td>
          <td>27/08/2022</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tender Document For the Supply of Health Products (Topical, Disinfectants, Antiseptics & Oral Liquid) </td>
          <td>12/09/2022</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Tender Document For the Supply of Antiretroviral Medicine (ARVs)</td>
          <td>21/08/2022</td>
        </tr>
      </tbody>
    </Table>
  ); 
}

export default StripedRowExample;