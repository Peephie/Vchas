import React from 'react';

const BorderedButton = ({theme, variant, label}) => {
  const buttonDefaultStyles = 'border font-cormorant-infant-semiBold-italic transition-all duration-500 uppercase ';

  const buttonSizeVariants = {
    default: 'text-3xl px-10 py-3',
    small: 'text-lg px-16 py-2',
  };
  const buttonStyleVariants = {
    base: buttonDefaultStyles + 'text-coral hover:text-cherry border-peach hover:border-beige',
    inverse: buttonDefaultStyles + 'text-peach hover:text-beige border-coral hover:border-cherry',
  };

  const buttonSizeVariant = variant === 'small' ? 'small' : 'default';
  const buttonStyleVariant = theme === 'variant-beige-to-cherry' || theme === 'variant-inverse' ? 'inverse' : 'base';

  const buttonStyle = `${buttonSizeVariants[buttonSizeVariant]} ${buttonStyleVariants[buttonStyleVariant]}`;

  return (
    <div className={buttonStyle}>{label}</div>
  )
}

export default BorderedButton