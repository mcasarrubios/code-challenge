import Express from 'express';
import ServerApp from './app';

const serverApp = new ServerApp(Express());
serverApp.start(true);
