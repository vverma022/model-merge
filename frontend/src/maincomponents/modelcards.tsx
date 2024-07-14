import { Card, CardHeader, CardTitle, CardContent} from '../components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar'
import { Url } from 'url'

interface ModelCardsProps {
  CardT: string,
  CardD: string,
  Company: string
  Icon: string
}

export const ModelCards = ({CardT, CardD,Company,Icon}: ModelCardsProps) => {

  return (
    <div className="p-4">
      <div className="flex gap-4 mt-4 overflow-x-scroll">
        <Card>
          <CardHeader>
              <Avatar className='flex justify-end'>
                  <AvatarImage src={Icon} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center pb-2">{CardT}</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 justify-center flex-col">
            <ul className="font-extralight text-sm text-red-600">Developed By {Company}</ul>
            <p className="overflow-hidden text-pretty overflow-y-auto max-h-48">
              {CardD}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
