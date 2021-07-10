import HomeSectionOne from '../../components/sections/homeSectionOne';
import HomeSectionTwo from '../../components/sections/homeSectionTwo';
import FloatImage from '../../components/float/floatImage';

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${FloatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;