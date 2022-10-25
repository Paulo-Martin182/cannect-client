import { mockAbout } from './mockAbout'
import * as S from './styles'

export type AboutUsProps = {
  text_about: string
  title: string
  text: string
  link_text: string
  linkAs: string
}

const AboutUs = ({
  text_about = mockAbout.attributes.text_about,
  title = mockAbout.attributes.title,
  text = mockAbout.attributes.text,
  link_text = mockAbout.attributes.link_text,
  linkAs = mockAbout.attributes.linkAs
}: AboutUsProps) => (
  <S.Wrapper>
    <div className="contentBox">
      <div className="about-leftBox">
        <h3> {text_about} </h3>
      </div>
      <div className="about-rightBox">
        <div className="about-content">
          <h3 className="about-title"> {title} </h3>
          <p className="about-text"> {text} </p>
        </div>
      </div>
    </div>

    <div className="about-link">
      <a href={linkAs}>{link_text}</a>
    </div>
  </S.Wrapper>
)

export default AboutUs
