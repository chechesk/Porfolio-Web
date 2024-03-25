import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./About.css";

class About extends Component {
  render() {
    const { t } = this.props;

    return (
      
        <div className="grid grid-rows-3 grid-flow-col gap-4 ">
          <div className="row-span-3 ">
            <img
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"
              className="w-[80px] h-[80px]   m-16 "
              alt="Mongo"
            />
            <img
              src="https://www.cyberzon3.com/img/express.png"
              className="w-[80px] h-[80px]   m-16"
              alt="Express"
            />
            <img
              src="https://www.cyberzon3.com/img/React.png"
              className="w-[80px] h-[80px]   m-16"
              alt="React"
            />
            <img
              src="https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png"
              className="w-[80px] h-[80px]    m-16 "
              alt="Note"
            />
          </div>

          <div className="col-span-2 pt-10">
          <h2 className="text-center pt-10 text-3xl">{t("about:title")} </h2>
          </div>

          <div className="row-span-2 mt-[-140px] md:mt-[-70px]  ">
          
            <p className="my-1 text-xl text-justify mx-8">
              {t("about:description")}
            </p>
            <p className="my-1 text-xl text-justify mx-8">
              {t("about:summary")}
            </p>
            <table className=" divide-y divide-gray-200  md:mx-[30%] mt-10 ">
              <thead className="text-center ">
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider w-[240px]">
                    Backend
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider w-[240px]">
                    Frontend
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider w-[240px]">
                    DevOps
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <ul>
                      <li className="text-black dark:text-black">Node.js</li>
                      <li className="text-black dark:text-black">Express.js</li>
                      <li className="text-black dark:text-black">JSON Web Token</li>
                      <li className="text-black dark:text-black">MongoDB</li>
                      <li className="text-black dark:text-black">Sequelize</li>
                      <li className="text-black dark:text-black">Git / GitHub</li>
                      <li className="text-black dark:text-black"></li>
                      <li className="text-black dark:text-black"></li>
                    
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <ul>
                      <li className="text-black dark:text-black">React</li>
                      <li className="text-black dark:text-black">Vite</li>
                      <li className="text-black dark:text-black">Next.js</li>
                      <li className="text-black dark:text-black">Tailwind CSS</li>
                      <li className="text-black dark:text-black">CSS puro</li>
                      <li className="text-black dark:text-black">Material UI</li>
                      <li className="text-black dark:text-black">Chakra UI</li>
                      <li className="text-black dark:text-black">Git / GitHub</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <ul>
                      <li className="text-black dark:text-black">Ubuntu</li>
                      <li className="text-black dark:text-black">Windows</li>
                      <li className="text-black dark:text-black">Nginx</li>
                      <li className="text-black dark:text-black">Docker / Docker Compose</li>
                      <li className="text-black dark:text-black">AWS</li>
                      <li className="text-black dark:text-black">Azure</li>
                      <li className="text-black dark:text-black">Google Cloud</li>
                      <li className="text-black dark:text-black">Git / GitHub</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
    );
  }
}

export default withTranslation()(About);
