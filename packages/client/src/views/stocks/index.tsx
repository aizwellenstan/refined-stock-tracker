// import React from 'react';
// import { Seo } from 'src/components/seo';
// import { useTranslation } from 'react-i18next';
// import { Timetable } from 'src/components/timetable';

// export const Activities = React.memo(() => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <Seo
//         title={t('activities.page_title', {
//           defaultValue: 'Activities - Refined Itsukara.link',
//         })}
//         description={t('activities.description', {
//           defaultValue: 'Recent activities of Nijisanji streamers',
//         })}
//       />

//       <Timetable />
//     </>
//   );
// });

import React from 'react';
import { Seo } from 'src/components/seo';
import { useTranslation } from 'react-i18next';
import { TimetableContainer } from 'src/containers/timetable-container';
import { SidebarContainer } from 'src/containers/sidebar-container';
import { StoreContext } from 'redux-react-hook';
import { configureStore } from 'src/redux/store';

import StockRow from '../../components/stockrow';

const store = configureStore();

export const　Stocks = React.memo(() => {
  const { t } = useTranslation();

  return (
    <>
      <div className="App">
        <div className="container">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <StockRow ticker="aapl" />
              <StockRow ticker="goog" />
              <StockRow ticker="msft" />
              <StockRow ticker="tsla" />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
});
