import React from "react";
import PropTypes from "prop-types";
import { ButtonToolbar, Button, Icon, Steps } from "rsuite";

export default function Pagination({
  prev,
  next,
  onPrevHandler,
  onNextHandler,
  page,
}) {
  return (
    <ButtonToolbar>
      <Button
        disabled={!prev}
        icon={<Icon icon="arrow-left" />}
        placement="left"
        onClick={onPrevHandler}
        data-testid="prevBtn"
      >
        Prev
      </Button>
      <span>{page}</span>

      <Button
        disabled={!next}
        icon={<Icon icon="arrow-right" />}
        placement="right"
        onClick={onNextHandler}
        data-testid="nextBtn"
      >
        Next
      </Button>
    </ButtonToolbar>
  );
}

Pagination.propTypes = {
  prev: PropTypes.bool,
  next: PropTypes.bool,
  onPrevHandler: PropTypes.func.isRequired,
  onNextHandler: PropTypes.func.isRequired,
  page: PropTypes.number,
};
