(() => {
  const isEn = location.pathname.startsWith('/en/');
  const t = (zh, en) => isEn ? en : zh;
  const topic = document.querySelector('#dynamic-visual-measurement');
  const plate = topic?.querySelector('.method-plate');
  if (!topic || !plate || topic.dataset.compactPlate === 'true') return;

  topic.dataset.compactPlate = 'true';
  plate.querySelectorAll('.method-description').forEach((node) => node.remove());
  plate.insertAdjacentHTML('afterend', `
    <div class="method-indicator-index" aria-label="${t('三种动态视觉测度指标', 'Three dynamic visual measurement indicators')}">
      <span>${t('光流轨迹', 'Optical-flow trajectory')}</span>
      <i aria-hidden="true">·</i>
      <span>${t('光流速率', 'Optical-flow velocity')}</span>
      <i aria-hidden="true">·</i>
      <span>${t('视觉更新量', 'Amount of visual updating')}</span>
    </div>
    <p class="method-plate-caption">${t(
      '三种动态视觉测度方法均以移动观察过程中的全景视觉序列为基础，分别从像素运动轨迹、空间界面相对运动速率和环境信息更新程度三个维度描述视觉环境变化，形成光流轨迹、光流速率与视觉更新量三类可计算指标，为视觉感知研究和环境空间比较提供量化基础。',
      'The three methods use panoramic visual sequences captured during movement to describe changes in the visual environment from three complementary dimensions: pixel-motion trajectories, relative motion velocity across spatial surfaces, and the amount of environmental information updating. They produce three computable indicators—optical-flow trajectory, optical-flow velocity, and visual updating—for perception research and comparative spatial analysis.'
    )}</p>`);
})();
