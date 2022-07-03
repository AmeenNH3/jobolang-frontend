import React from "react";

import styled from "styled-components";
import JobsContainer from "../../components/JobsContainer";

function AllJobs() {
  return (
    <Wrapper>
      {/* <SearchContainer></SearchContainer> */}
      <JobsContainer></JobsContainer>
    </Wrapper>
  );
}

export default AllJobs;

const Wrapper = styled.div`
  overflow-y: scroll;
`;
