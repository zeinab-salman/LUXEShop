export const CalculateStatistic = (data = [], valueKey = null) => {
  if (!Array.isArray(data) || data.length === 0) {
    return { total: 0, percentage: 0 };
  }

  const getDeepValue = (item, key) => {
    if (item[key] !== undefined) return item[key];
    if (item.userId && item.userId[key] !== undefined) return item.userId[key];
    return null;
  };

  const hasDate = data.some(item => getDeepValue(item, "date"));
  if (!hasDate) {
    return {
      total: valueKey
        ? data.reduce((sum, item) => sum + (Number(getDeepValue(item, valueKey)) || 0), 0)
        : data.length,
      percentage: 0
    };
  }
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const yearOfLastMonth = currentMonth === 0 ? currentYear - 1 : currentYear;

  const filterByDate = (month, year) =>
    data.filter(item => {
      const dateValue = getDeepValue(item, "date");
      if (!dateValue) return false;

      const d = new Date(dateValue);
      return !isNaN(d) && d.getMonth() === month && d.getFullYear() === year;
    });

  const thisMonthData = filterByDate(currentMonth, currentYear);
  const lastMonthData = filterByDate(lastMonth, yearOfLastMonth);

  const calculateTotal = (items) =>
    items.reduce((sum, item) => {
      if (valueKey) {
        return sum + (Number(getDeepValue(item, valueKey)) || 0);
      }
      return sum + 1;
    }, 0);

  const currentVal = calculateTotal(thisMonthData);
  const lastVal = calculateTotal(lastMonthData);

  let percentage = 0;
  if (lastVal > 0) {
    percentage = Number((((currentVal - lastVal) / lastVal) * 100).toFixed(1));
  } else if (currentVal > 0) {
    percentage = 100;
  }

  return { total: currentVal, percentage };
};
