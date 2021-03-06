import { compose, withState } from 'recompose';
import { progressValues } from 'spunky';

import RegisterForm from './RegisterForm';
import createAccountActions from '../../../actions/createAccountActions';
import withAlert from '../../../hocs/withAlert';
import withProgressChange from '../../../hocs/withProgressChange';

const { FAILED } = progressValues;

export default compose(
  withState('passphrase', 'setPassphrase', ''),
  withState('passphraseConfirmation', 'setPassphraseConfirmation', ''),
  withAlert(),
  withProgressChange(createAccountActions, FAILED, (state, props) => props.alert(`Error: ${state.error}`))
)(RegisterForm);
