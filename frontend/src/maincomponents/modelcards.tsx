import { Card, CardHeader, CardTitle, CardContent} from '../components/ui/card'
import { Button } from '../components/ui/button'

interface ModelCardsProps {
  CardT: string,
  CardD: string,
}

export const ModelCards = ({CardT, CardD}: ModelCardsProps) => {

  return (
    <div>
      <div className="flex gap-4 mt-4 overflow-x-scroll">
        <Card>
          <CardHeader>
            <CardTitle className='text-center'>{CardT}</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 py-4 justify-center flex-col">
            <p className='text-wrap text-ellipsis'>{CardD}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
