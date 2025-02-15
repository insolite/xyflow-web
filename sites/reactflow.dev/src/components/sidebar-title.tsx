import type { InternalRoute } from '@/utils';

const proExampleRoutes = {
  '/examples/nodes/dynamic-grouping': 'pro',
  '/examples/nodes/resize-rotate-moveable-deprecated': 'pro',
  '/examples/nodes/shapes': 'pro',
  '/examples/layout/force-layout': 'pro',
  '/examples/layout/auto-layout': 'pro',
  '/examples/layout/expand-collapse': 'pro',
  '/examples/layout/workflow-builder-starter': 'pro',
  '/examples/interaction/collaborative': 'pro',
  '/examples/interaction/helper-lines': 'pro',
  '/examples/interaction/undo-and-redo': 'pro',
  '/examples/interaction/copy-and-paste': 'pro',
} satisfies { [K in InternalRoute]?: string };

export default function SidebarTitle({
  title,
  type,
  route,
}: {
  title: string;
  type: string;
  route: string;
}) {
  return (
    <div className={`sidebar-title ${proExampleRoutes[route] ?? ''}`}>
      {title}
    </div>
  );
}
