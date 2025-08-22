<script setup>
import FeatureCard from '../src/components/FeatureCard.vue'
import PricingCard from '../src/components/PricingCard.vue'

const licenses = [
  { title: 'Single License', price: '$49', description: 'Use in one project' },
  { title: 'Team License', price: '$99', description: 'Use in up to 5 projects' },
  { title: 'Agency License', price: '$199', description: 'Use in unlimited projects' },
  { title: 'Enterprise License', price: '$399', description: 'Use in unlimited projects + priority support' },
];


const features = [
  { title: 'Drag & Drop Interface', content: 'Intuitive drag-and-drop functionality for moving records between columns' },
  { title: 'Workflow Transitions', content: 'Define allowed status transitions to control record movement' },
  { title: 'Real-time Search', content: 'Search across multiple fields with debounced input' },
  { title: 'Advanced Filtering', content: 'Custom filter forms with multiple field types' },
  { title: 'Pagination', content: 'Load more records per column with infinite scroll' },
  { title: 'Custom Actions', content: 'Header actions, record actions, and column header actions' },
  { title: 'Responsive Design', content: 'Mobile-friendly interface with touch support' },
  { title: 'Customizable Cards', content: 'Custom card components with rich content display' },
  { title: 'Column Customization', content: 'Colors, icons, labels, and descriptions for columns' },
  { title: 'Record Locking', content: 'Prevent specific records from being moved' },
  { title: 'Performance Optimized', content: 'Efficient queries with caching and lazy loading' },
  { title: 'Priority Support', content: 'Dedicated support for enterprise customers' },
]

</script>

# 💰 Pricing & Licensing

This is a premium plugin that requires a valid license to use in production.

## License Options

<PricingCard :items="licenses" />

## Purchase

- [Purchase Link: Buy Advanced Kanban](#)  
- [Documentation: Full Documentation](#)  
- [Support: Support Portal](#)  

## Trial Version


A free trial version is available for evaluation purposes with limited features.
## 🚀 Features
<FeatureCard :items="features" />