/*
 * @Author: heinan
 * @Date: 2020-01-09 10:00:18
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-10 15:07:32
 */
import React from 'react';
import RouterView from '@/router';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from '@/components/modal/alert';
import Dialog from '@/components/modal/dialog';
import 'antd/dist/antd.css';

const App: React.FC = function() {
  return (
    <div>
      <Dialog>
        <div>666</div>
      </Dialog>
      <Router>
        <RouterView></RouterView>
      </Router>
    </div>
  );
};
export default App;
