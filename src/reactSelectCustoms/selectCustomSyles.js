export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : 'grey',
    padding: 8,
  }),
  control: () => ({
    width: '105%',
    display: 'flex',
    marginTop: '-.5rem',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export const customTheme = (theme) => {
  return {
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: '#D1D0CE',
      primary: 'black',
    },
  };
};
