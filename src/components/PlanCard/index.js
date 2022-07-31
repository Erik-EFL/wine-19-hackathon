import {
  Box, Button, Chip, Grid,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TbGift } from 'react-icons/tb';
import PlanCardPaper from './style';

function PlanCard({ selectedPlan, showTitle }) {
  const [elevation, setElevation] = useState(2);

  const handleMouseOver = () => {
    setElevation(6);
  };

  const handleMouseOut = () => {
    setElevation(2);
  };

  return (
    <Grid item xs={4} sm={12} justifyContent="center">
      <PlanCardPaper
        elevation={elevation}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {showTitle && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <span>Plano</span>
              <h3>{selectedPlan.name.split(' ')[1].toUpperCase()}</h3>
            </div>
            <Chip color="secondary" label={selectedPlan.promotion} />
          </Box>
        )}
        <p className="price">
          {'de '}
          <span style={{ textDecoration: 'line-through' }}>
            {`R$ ${selectedPlan.price}`}
          </span>
          {' por:'}
        </p>
        <p className="price-with-discount">
          {'R$ '}
          <span className="price-with-discount--bold">{selectedPlan.priceWithDiscount}</span>
          /mês
        </p>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Chip
            sx={{ paddingLeft: 1, paddingRight: 1 }}
            disabled={!selectedPlan.gift}
            icon={<TbGift sx={{ marginBottom: 4 }} size="1rem" />}
            label={selectedPlan.gift || 'nenhum brinde disponível'}
          />
        </Box>
        <Button variant="contained" disableElevation>
          {`Assinar ${selectedPlan.name.split(' ')[1].toLowerCase()}`}
        </Button>
      </PlanCardPaper>
    </Grid>
  );
}

PlanCard.defaultProps = {
  showTitle: false,
};

PlanCard.propTypes = {
  selectedPlan: PropTypes.shape({
    name: PropTypes.string,
    promotion: PropTypes.string,
    price: PropTypes.number,
    priceWithDiscount: PropTypes.number,
    gift: PropTypes.string,
  }).isRequired,
  showTitle: PropTypes.bool,
};

export default PlanCard;
