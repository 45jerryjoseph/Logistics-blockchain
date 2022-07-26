import Table from 'react-bootstrap/Table';

function TenderTable({tenders}) {

  const tenderList = tenders.map((tender)=>{
    return (
      <tr>
        <td>{tender.num}</td>
        <td>{tender.title}</td>
        <td>{tender.date}</td>
      </tr>
    );
  })
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
        {tenderList}
      </tbody>
    </Table>
  ); 
}

export default TenderTable;