import pandas as pd
import matplotlib.pyplot as plt
from pymongo import MongoClient

def fetch_data_from_mongo():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['prediction']
    collection = db['prediction']
    document = collection.find_one(sort=[('_id', -1)])
    if document:
        if '_id' in document:
            document['_id'] = str(document['_id'])
        return document
    else:
        return {"error": "No data found"}

fetched_result = fetch_data_from_mongo()

dates = pd.to_datetime(fetched_result['dates'])
forecast_daily_infections = fetched_result['forecast_daily_infections']
forecast_cumulative_cases = fetched_result['forecast_cumulative_cases']

historical_dates = pd.date_range(start=dates[0] - pd.DateOffset(years=1), end=dates[0] - pd.DateOffset(days=1), freq='D')
historical_daily_infections = [100 + i for i in range(len(historical_dates))]
historical_cumulative_cases = [x + 1000 for x in historical_daily_infections]

historical_infections_df = pd.DataFrame({
    'Date': historical_dates,
    'Daily_Infections': historical_daily_infections
})

historical_cumulative_cases_df = pd.DataFrame({
    'Date': historical_dates,
    'Cumulative_Cases': historical_cumulative_cases
})

forecast_infections_df = pd.DataFrame({
    'Date': dates,
    'Daily_Infections': forecast_daily_infections
})

forecast_cumulative_cases_df = pd.DataFrame({
    'Date': dates,
    'Cumulative_Cases': forecast_cumulative_cases
})

plt.figure(figsize=(14, 10))

plt.subplot(2, 1, 1)
plt.plot(historical_infections_df['Date'], historical_infections_df['Daily_Infections'], color='blue', linestyle='--', label='Historical Daily Infections')
plt.plot(forecast_infections_df['Date'], forecast_infections_df['Daily_Infections'], color='orange', label='Forecasted Daily Infections')
plt.title('Daily Infections')
plt.xlabel('Date')
plt.ylabel('Daily Infections')
plt.legend()
plt.grid(True)

plt.subplot(2, 1, 2)
plt.plot(historical_cumulative_cases_df['Date'], historical_cumulative_cases_df['Cumulative_Cases'], color='blue', linestyle='--', label='Historical Cumulative Cases')
plt.plot(forecast_cumulative_cases_df['Date'], forecast_cumulative_cases_df['Cumulative_Cases'], color='orange', label='Forecasted Cumulative Cases')
plt.title('Cumulative Cases')
plt.xlabel('Date')
plt.ylabel('Cumulative Cases')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()
