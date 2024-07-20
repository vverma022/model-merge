import { Button } from "./button"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel} from "../ui/alert-dialog"


const Upgrade = () => {
  return (
    <div>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full" >Upgrade to Pro</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex justify-center text-yellow-600">ModelMerge-Pro</AlertDialogTitle>
          <AlertDialogDescription>
            The full version of ModelMerge will include Langchain support more models and better response times. It is still in development as we want to give 
            the best possible experience to our users and to be very honest we are still figuring out how to implement so advance features and on the most part the pricing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
      <AlertDialogCancel>
        OK
        </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}

export default Upgrade