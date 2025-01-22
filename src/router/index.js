import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TicTacToe from '../views/TicTacToe.vue';
import SnakeAndLadder from "../views/SnakeAndLadder.vue"; // بررسی مسیر دقیق
import Puzzle from "../views/Puzzle.vue";
import Tetris from "../views/Tetris.vue";
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tic-tac-toe', name: 'TicTacToe', component: TicTacToe },
  { path: '/snake-and-ladder', name: 'SnakeAndLadder', component: SnakeAndLadder },
  {path: '/puzzle', name: 'Puzzle', component: Puzzle },
  { path: '/tetris', component: Tetris },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
