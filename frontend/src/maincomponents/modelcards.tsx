import { Card, CardHeader, CardTitle, CardContent} from '../components/ui/card'
import { Button } from '../components/ui/button'

interface ModelCardsProps {
  CardT: string,
  CardD: string,
  Company: string
}

export const ModelCards = ({CardT, CardD,Company}: ModelCardsProps) => {

  return (
    <div className="p-4">
    <div className="flex gap-4 mt-4 overflow-x-scroll">
      <Card>
        <CardHeader>
          <CardTitle className="text-center pb-2">{CardT}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4 justify-center flex-col">
          <ul className="font-extralight text-sm">Developed By {Company}</ul>
          <p className="overflow-hidden text-pretty overflow-y-auto max-h-48">
            {CardD}
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}
