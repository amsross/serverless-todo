import Card from 'react-bootstrap/Card'

interface TaskProps {
  title: string;
  desc: string;
}

export const TaskCard = ({ title, desc }: TaskProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>

      </Card.Body>

    </Card>
  )
}
