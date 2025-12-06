import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
const DialogBookNotFound = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const handleOnClose = () => {
    onClose();
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Detail for this book is not available.
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center sm:justify-center">
          <AlertDialogCancel onClick={handleOnClose}>OK</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogBookNotFound;
