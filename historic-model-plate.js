(() => {
  const isEn = location.pathname.startsWith('/en/');
  const t = (zh, en) => isEn ? en : zh;
  const section = document.querySelector('#historic-visual-information-model');
  if (!section) return;

  section.innerHTML = `
    <header>
      <span class="topic-number">02</span>
      <div>
        <p>${t('关键方法与技术', 'Key methods and techniques')}</p>
        <h3>${t('历史环境视觉信息模型', 'Visual Information Modelling for Historic Environments')}</h3>
      </div>
    </header>
    <p class="topic-lead historic-model-lead">${t(
      '以路径连续全景影像为输入，通过环境要素语义解析、空间深度估计与三维重建，关联场景、视点、路径和对象类别，形成可查询、可测度的历史环境视觉信息模型。',
      'Sequential panoramic imagery captured along routes is transformed through semantic scene parsing, depth estimation, and 3D reconstruction. Scenes, viewpoints, routes, and object classes are connected in a visual information model that can be queried and measured.'
    )}</p>
    <div class="historic-model-plate" aria-label="${t('历史环境视觉信息模型技术流程组图', 'Technical workflow plate for visual information modelling in historic environments')}">
      <figure class="historic-model-panel capture-panel">
        <div class="historic-model-media"><img src="/research/historic-visual-information-model/sequential-visual-capture.png" alt="${t('沿路径连续采集的历史环境全景影像序列', 'Sequential panoramic images captured along a route through a historic environment')}" loading="lazy"></div>
        <figcaption><span>01</span><strong>${t('连续视觉采集', 'Sequential Visual Capture')}</strong><small>${t('路径全景序列', 'Route-based panoramic sequence')}</small></figcaption>
      </figure>
      <figure class="historic-model-panel semantic-panel">
        <div class="historic-model-media"><img src="/research/historic-visual-information-model/semantic-scene-parsing.jpg" alt="${t('历史环境场景语义分割结果', 'Semantic segmentation of a historic environment scene')}" loading="lazy"></div>
        <figcaption><span>02</span><strong>${t('场景语义解析', 'Semantic Scene Parsing')}</strong><small>${t('环境要素与视觉问题识别', 'Environmental elements and visual-issue detection')}</small></figcaption>
      </figure>
      <figure class="historic-model-panel depth-panel">
        <div class="historic-model-media"><img src="/research/historic-visual-information-model/depth-and-3d-reconstruction.png" alt="${t('历史空间的彩色深度点云', 'Colourised depth point cloud of a historic space')}" loading="lazy"></div>
        <figcaption><span>03</span><strong>${t('深度估计与三维重建', 'Depth Estimation and 3D Reconstruction')}</strong><small>${t('空间尺度与几何关系恢复', 'Recovery of spatial scale and geometry')}</small></figcaption>
      </figure>
      <figure class="historic-model-panel integrated-panel">
        <div class="historic-model-media"><video autoplay muted loop playsinline controls preload="metadata" aria-label="${t('历史环境视觉信息模型动态演示', 'Dynamic demonstration of the historic-environment visual information model')}"><source src="/research/historic-visual-information-model/integrated-visual-information-model.mp4" type="video/mp4"></video></div>
        <figcaption><span>04</span><strong>${t('综合视觉信息模型', 'Integrated Visual Information Model')}</strong><small>${t('场景—视点—路径关联', 'Scene–viewpoint–route relationships')}</small></figcaption>
      </figure>
    </div>
    <div class="historic-model-flow" aria-hidden="true"><span>${t('连续采集', 'Capture')}</span><i>→</i><span>${t('语义解析', 'Semantics')}</span><i>→</i><span>${t('几何重建', 'Geometry')}</span><i>→</i><span>${t('综合模型', 'Model')}</span></div>
    <p class="historic-model-caption">${t(
      '该模型将连续视觉记录转化为兼具语义与空间结构的数字表达，为历史环境的特征识别、认知分析与视觉问题诊断提供可计算的数据基础。',
      'The model converts sequential visual records into a digital representation combining semantic and spatial structure, providing a computable basis for feature identification, cognition research, and visual-issue diagnosis in historic environments.'
    )}</p>`;
})();
