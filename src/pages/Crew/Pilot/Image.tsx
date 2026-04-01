import styled from 'styled-components'
import { IDataCrew } from '../../../types/redux/pages'
import { device } from '../../../styles/mediaSize'

const StyledContainer = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.mobileL} {
    display: flex;
    justify-content: center;
  }
`
const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 11%;

  @media ${device.laptop} {
    position: relative;
    transform: translateY(0px);
    top: 0;
    right: 0;
    max-height: 400px;
    max-width: 300px;
  }

  @media ${device.mobileL} {
    width: 50%;
    height: auto;
  }
`

interface IImageProps {
  data: IDataCrew[]
  activeSlider: number
}

export const Image = ({ data, activeSlider }: IImageProps) => {
  const { images, name } = data[activeSlider]

  return (
    <StyledContainer>
      <StyledImage src={images.png} alt={name} />
    </StyledContainer>
  )
}
