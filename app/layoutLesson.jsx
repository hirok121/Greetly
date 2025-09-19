import { ScrollView, Text, View,StyleSheet } from 'react-native';

const LayoutLesson = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Layout Lesson</Text>
      <Text style={styles.description}>Learn Flexbox and Grid layouts</Text>
      
      {/* Flexbox Examples */}
      <View style={styles.exampleContainer}>
        <Text style={styles.sectionTitle}>Flexbox Examples</Text>
        
        {/* Flex Direction Row */}
        <Text style={styles.subTitle}>Flex Direction: Row</Text>
        <View style={styles.flexRowContainer}>
          <View style={[styles.flexBox, styles.box1]}><Text>1</Text></View>
          <View style={[styles.flexBox, styles.box2]}><Text>2</Text></View>
          <View style={[styles.flexBox, styles.box3]}><Text>3</Text></View>
        </View>

        {/* Flex Direction Column */}
        <Text style={styles.subTitle}>Flex Direction: Column</Text>
        <View style={styles.flexColumnContainer}>
          <View style={[styles.flexBox, styles.box4]}><Text>A</Text></View>
          <View style={[styles.flexBox, styles.box5]}><Text>B</Text></View>
          <View style={[styles.flexBox, styles.box6]}><Text>C</Text></View>
        </View>

        {/* Justify Content Examples */}
        <Text style={styles.subTitle}>Justify Content: Space Between</Text>
        <View style={styles.justifySpaceBetween}>
          <View style={[styles.smallBox, styles.box1]}><Text>1</Text></View>
          <View style={[styles.smallBox, styles.box2]}><Text>2</Text></View>
          <View style={[styles.smallBox, styles.box3]}><Text>3</Text></View>
        </View>

        {/* Align Items Center */}
        <Text style={styles.subTitle}>Align Items: Center</Text>
        <View style={styles.alignItemsCenter}>
          <View style={[styles.smallBox, styles.box4]}><Text>Centered</Text></View>
        </View>
      </View>

      {/* Grid Examples */}
      <View style={styles.exampleContainer}>
        <Text style={styles.sectionTitle}>Grid Examples (CSS Grid for Web)</Text>
        
        {/* Simple Grid */}
        <Text style={styles.subTitle}>3x3 Grid Layout</Text>
        <View style={styles.gridContainer}>
          <View style={[styles.gridItem, styles.box1]}><Text>1</Text></View>
          <View style={[styles.gridItem, styles.box2]}><Text>2</Text></View>
          <View style={[styles.gridItem, styles.box3]}><Text>3</Text></View>
          <View style={[styles.gridItem, styles.box4]}><Text>4</Text></View>
          <View style={[styles.gridItem, styles.box5]}><Text>5</Text></View>
          <View style={[styles.gridItem, styles.box6]}><Text>6</Text></View>
          <View style={[styles.gridItem, styles.box1]}><Text>7</Text></View>
          <View style={[styles.gridItem, styles.box2]}><Text>8</Text></View>
          <View style={[styles.gridItem, styles.box3]}><Text>9</Text></View>
        </View>

        {/* Grid with Span */}
        <Text style={styles.subTitle}>Grid with Column Span</Text>
        <View style={styles.gridSpanContainer}>
          <View style={[styles.gridSpanHeader, styles.box4]}><Text>Header (Spans 3 cols)</Text></View>
          <View style={[styles.gridItem, styles.box1]}><Text>Item 1</Text></View>
          <View style={[styles.gridItem, styles.box2]}><Text>Item 2</Text></View>
          <View style={[styles.gridItem, styles.box3]}><Text>Item 3</Text></View>
        </View>

        {/* Responsive Grid */}
        <Text style={styles.subTitle}>Auto-fit Grid (Responsive)</Text>
        <View style={styles.responsiveGrid}>
          <View style={[styles.gridItem, styles.box5]}><Text>Auto 1</Text></View>
          <View style={[styles.gridItem, styles.box6]}><Text>Auto 2</Text></View>
          <View style={[styles.gridItem, styles.box1]}><Text>Auto 3</Text></View>
          <View style={[styles.gridItem, styles.box2]}><Text>Auto 4</Text></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  
  /* Example Container */
  exampleContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 8,
    color: '#555',
  },

  /* Flexbox Styles */
  flexRowContainer: {
    flexDirection: 'row',
    height: 80,
    marginBottom: 15,
    gap: 10,
  },
  flexColumnContainer: {
    flexDirection: 'column',
    height: 150,
    marginBottom: 15,
    gap: 10,
  },
  justifySpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginBottom: 15,
  },
  alignItemsCenter: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  flexBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  smallBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  /* Grid Styles (CSS Grid for Web) */
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',  // 3 columns
    gridTemplateRows: 'repeat(3, 60px)',    // 3 rows, each 60px high
    gap: 10,
    marginBottom: 15,
  },
  gridSpanContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 10,
    marginBottom: 15,
  },
  responsiveGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: 10,
    marginBottom: 15,
  },
  gridItem: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  gridSpanHeader: {
    gridColumn: 'span 3',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  /* Color Styles */
  box1: {
    backgroundColor: '#FF6B6B',
  },
  box2: {
    backgroundColor: '#4ECDC4',
  },
  box3: {
    backgroundColor: '#45B7D1',
  },
  box4: {
    backgroundColor: '#FFA07A',
  },
  box5: {
    backgroundColor: '#98D8C8',
  },
  box6: {
    backgroundColor: '#F7DC6F',
  },
});

export default LayoutLesson;