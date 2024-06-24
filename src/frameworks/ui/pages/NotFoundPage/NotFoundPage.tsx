import { FC } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

const NotFoundPage: FC = () => <ErrorMessage message={'Page not found'} />;

export default NotFoundPage;
