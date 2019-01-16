import { createStyles, Theme } from "@material-ui/core";

const styles = createStyles((theme: Theme) => ({
  infoContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  imageContainer: {
    textAlign: 'center',
    '& img': {
      width: '120px',
    },
  },
  retryButtonContainer: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
  },
}));

export default styles;