// this is the Name.tsx file
// TODO: https://www.npmjs.com/package/color-cards
import React from 'react';
import PropTypes from 'prop-types';

function ColorCard({ color, variables }) {
  console.log('variables', variables);

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '1rem',
      }}
    >
      {variables.map((variable) => (
        <div
          key={`${color}-${variable}`}
          className={`color-card ${color}-${variable}`} >
          {color} - {variable}
          <div
            style={{
              height: '100px',
              width: '100px',
              backgroundColor: `var(--${color}-${variable})`,
            }}
          >
            {/* stay gold */}
          </div>
        </div>
      ))}
    </section>
  );
}

export const Colors = ({ primary }) => {
  const mode = primary ? 'storybook-Colors--primary' : 'storybook-Colors--secondary';
  return (
    <main className='color-deck'>
      <h1>Color</h1>

      <ColorCard color="honey" variables={[50, 100, 200, 300, 400, 500, 600, 700]} />
      <ColorCard color="denim" variables={[100, 200, 300, 400, 500, 600, 700, 750]} />
    </main>
  );
};

Colors.propTypes = {
  primary: PropTypes.bool,
};

Colors.defaultProps = {
  primary: false,
};