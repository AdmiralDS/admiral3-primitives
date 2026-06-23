// export const BUTTON_ROOT_DATA_ATTRIBUTE = 'data-admiral-button' as const;
/** Вопросы:
 * 1) Зачем генерация data-attrs?
 * 2) Может размерности всё же оставить в нижнем регистре для совместимости в версией 2.1?
 **/
export const BUTTON_DIMENSIONS = ['L', 'M', 'S', 'XS'] as const;

export const BUTTON_APPEARANCES = ['solid', 'outline', 'flat', 'ghost'] as const;
// error и success кнопки в макетах относятся к типу solid, ещё есть кнопки whiteStatic

export const BUTTON_COLORS = ['colored', 'neutral', 'whiteStatic'] as const;

export const BUTTON_SIZE_PARAMETERS: Record<(typeof BUTTON_DIMENSIONS)[number], number> = {
  L: 48,
  M: 40,
  S: 32,
  XS: 24,
};
