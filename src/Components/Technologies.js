import React from "react";
import { Skills } from './Skills'
import styled from 'styled-components'


export const breakpoints = {
    xs: 'screen and (max-width: 450px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  }

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #9999;

  @media ${props => 'screen and (max-width: 1024px)'} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => 'screen and (max-width: 768px)'} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin-bottom: 4rem;
  color: #99999;
  
  @media ${props => 'screen and (max-width: 1024px)'}{
    margin: 64px 0;
  }

  @media ${props => 'screen and (max-width: 768px)'}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => 'screen and (max-width: 640px)'}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 15px;
  }

  @media ${props => 'screen and (max-width: 450px)'}{
    display: flex;
    flex-direction: column;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  color: #99999;


  @media ${props => 'screen and (max-width: 640px)'}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #99999;
  margin-bottom: 8px;

@media ${props => 'screen and (max-width: 768px)'}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => 'screen and (max-width: 640px)'}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.div`
  font-size: 18px;
  line-height: 30px;  
  color: #99999;
  

  @media ${props => 'screen and (max-width: 768px)'}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => 'screen and (max-width: 640px)'}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: row;

@media ${props => 'screen and (max-width: 768px)'}{
  max-width: 203px;
}

@media ${props => 'screen and (max-width: 640px)'}{
  margin-bottom: 14px;
  max-width: 320px;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => 'screen and (max-width: 768px)'}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => 'screen and (max-width: 640px)'}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => 'screen and (max-width: 768px)'} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => 'screen and (max-width: 640px)'} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: #99999;


  @media ${(props) => 'screen and (max-width: 768px)'} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => 'screen and (max-width: 640px)'} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  color: #99999;

  background: ${(props) => props.colorAlt ?
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : ""};

  @media ${(props) => 'screen and (max-width: 768px)'} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => 'screen and (max-width: 640px)'} {
    width: 32px;
    height: 2px;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '67px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  color: #99999;


  @media ${props => 'screen and (max-width: 768px)'}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => 'screen and (max-width: 640px)'}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

const Technologies = () => (
  <Section id="skills">
    <SectionText>
      I've worked with multiple technologies as a developer to develop & maintain my projects.
    </SectionText>
    <List>
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
