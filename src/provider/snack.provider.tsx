import { SnackbarProvider } from 'notistack';

export const SnackProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      autoHideDuration={2500}
    >
      {children}
    </SnackbarProvider>
  );
};
