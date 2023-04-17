import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { addUser } from 'redux/user/user-opetations';
import { getMessage } from 'redux/user/user-selectors';
import { clearMessage } from 'redux/user/user-slice';
import PropTypes from 'prop-types';

import s from './UserForm.module.scss';

import { field } from 'components/Shared/TextField/fields';
import TextField from 'components/Shared/TextField/TextField';
import Button from 'components/Shared/Button';

const UserForm = () => {
  const dispatch = useDispatch();
  const message = useSelector(getMessage);
  const [isWarning, setIsWarning] = useState(null);

  useEffect(() => {
    const clearWarning = () => {
      setIsWarning(null);
      dispatch(clearMessage());
    };

    if (message) {
      setIsWarning(message);
      const timerId = setTimeout(clearWarning, 5000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [message, dispatch]);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      user: '',
      tweets: '',
      followers: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(addUser(data));
    reset();
  };

  return (
    <section className={s.userForm}>
      <div className={s.userBox}>
        <h2 className={s.title}>Create new user</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="user"
            rules={{ required: true, minLength: 2, maxLength: 20 }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                control={control}
                handleChange={onChange}
                {...field.user}
              />
            )}
          />
          <Controller
            control={control}
            name="tweets"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                control={control}
                handleChange={onChange}
                {...field.tweets}
              />
            )}
          />
          <Controller
            control={control}
            name="followers"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                control={control}
                handleChange={onChange}
                {...field.followers}
              />
            )}
          />
          {isWarning && (
            <div className={s.windowMessage}>
              <p className={s.textMessage}>{isWarning}</p>
            </div>
          )}
          <div className={s.wrap}>
            <Button text="CREATE" btnClass="btnLight" />
          </div>
        </form>
      </div>
    </section>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default UserForm;
